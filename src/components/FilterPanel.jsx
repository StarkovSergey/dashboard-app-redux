import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '../store/filters/filters-selectors'
import { clearFilter, removeFilter } from '../store/filters/filters-actions'


const FilterPanel = () => {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)

  const removeFilterHandler = (filter) => {
    dispatch(removeFilter(filter))
  }

  const clearButtonHandler = () => {
    dispatch(clearFilter())
  }

  if (filters.length === 0) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => {
            return <Badge
              key={filter}
              variant="clearable"
              onClear={() => removeFilterHandler(filter)}>
              {filter}
            </Badge>
          })}
        </Stack>

        <button className='link' onClick={clearButtonHandler}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
