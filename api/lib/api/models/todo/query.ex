defmodule Api.Models.Todo.Query do
  import Timex.Ecto
  import Ecto.Query
  alias Api.Models.Todo
  @one_day {60*60*24/1000000, 0, 0}

  # query api
  def all do
    from pt in Todo
  end

  def in_progress(query) do
    from pt in query,
      where: pt.deleted == false,
      order_by: pt.updated_at
  end
  def in_progress() do
    in_progress(all())
  end

  def completed(query) do
    from pt in query,
      where: pt.completed == true,
      order_by: pt.completed_at
  end
  def completed do
    completed(all())
  end

  def daily(query, day) do
    {beginning_day, ending_day} = get_date_range(day)
    from pt in query,
      where: pt.completed_at >= ^beginning_day,
      where: pt.completed_at < ^ending_day
  end
  def daily(day) do
    daily(all(), day)
  end

  def get(query, todo_id) do
    from pt in query,
      where: pt.id == ^todo_id
  end
  def get(todo_id) do
    get(all(), todo_id)
  end

  defp get_date_range(day) do
    beginning_day = Timex.parse!(day, "{YYYY}/{0M}/{0D}")
    ending_day = beginning_day |> Timex.shift(days: 1)
    {beginning_day, ending_day}
  end
end
