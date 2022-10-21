import { JobPosition } from './JobPosition'
import { useDispatch, useSelector } from 'react-redux'
import { selectVisiblePositions } from '../store/positions/position-selectors'
import { addFilter } from '../store/filters/filters-actions'
import { selectFilters } from '../store/filters/filters-selectors'

const JobList = () => {
  const filters = useSelector(selectFilters)
  const data = useSelector((state) => selectVisiblePositions(state, filters))
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export {JobList};
