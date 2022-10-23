class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :duration
      t.datetime :started_at
      t.boolean :completed
      t.timestamps
    end
  end
end
