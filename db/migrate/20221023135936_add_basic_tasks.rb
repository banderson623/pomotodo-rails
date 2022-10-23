class AddBasicTasks < ActiveRecord::Migration[7.0]
  def up
    Task.create(
      name: "Get basic html done",
      duration: 30,
      completed: false)

    Task.create(
      name: "Dynamic interaction with javascript",
      duration: 30,
      completed: false)

  end

  def down
    execute "truncate tasks;"
  end
end
