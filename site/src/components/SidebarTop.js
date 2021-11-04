import React from 'react';
import { VscFiles, VscPaintcan, VscPreview } from 'react-icons/vsc';
import { Button } from '.';
import { useHistory } from 'react-router-dom';
export default function SidebarTop({ onClick }) {
  const history = useHistory();
  return (
    <div>
      <Button onClick={onClick} title='projects'>
        <VscFiles />
      </Button>
      <Button onClick={() => history.push('/designs')} title='designs'>
        <VscPaintcan />
      </Button>
      <Button onClick={() => history.push('/')} title='home'>
        <VscPreview />
      </Button>
    </div>
  );
}
