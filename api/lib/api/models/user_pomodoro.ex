defmodule Api.Models.UserPomodoro do
  use Ecto.Schema
  import Ecto
  import Ecto.Query
  alias Api.Models.UserPomodoro

  schema "user_pomodoro" do
    field :user_id,     :string
    field :pomodoro_id, :integer
  end

  # query api
  def for_user(query, user_id) do
    from q in query,
      join: up in UserPomodoro, on: q.id == up.pomodoro_id,
      where: up.user_id == ^user_id,
      select: q
  end
end
