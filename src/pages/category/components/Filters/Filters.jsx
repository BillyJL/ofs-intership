import { clientConfig } from 'config/client';
import './Filters.scss';
import Filter from './components/Filter/Filter';

const Filters = () => {
  const { filters } = clientConfig;
  return (
    <div className="filter">
      {filters.map((filter) => (
        <Filter {...filter} />
      ))}
    </div>
  );
}

export default Filters;
