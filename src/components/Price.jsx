import { useState } from 'react';
import Switch from '@mui/material/Switch';

const Price = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <Switch
        checked={toggled}
        onChange={e => setToggled(e.target.checked)}
      />
    </div>
  );
};

export default Price;