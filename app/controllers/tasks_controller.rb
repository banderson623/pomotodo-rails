class TasksController < ApplicationController
  def index
    @tasks = Task.todo
  end
end
