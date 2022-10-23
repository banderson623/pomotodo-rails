class Task < ApplicationRecord

  scope :todo, -> {where(started_at: nil)}

  validates :name, presence: true
  validates_numericality_of :duration, greater_than: 0

  def start!
    self.started_at = Time.now
    save!
  end

  def complete!
    self.completed = true
    save!
  end

  def in_progress?
    self.started_at != nil && !completed?
  end
end
