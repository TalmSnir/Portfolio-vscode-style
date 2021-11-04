import React from 'react';
import { VscFiles } from 'react-icons/vsc';
import { Button } from '.';

export default function SidebarTop({ onClick }) {
  return (
    <div>
      <Button onClick={onClick} title='projects'>
        <VscFiles />
      </Button>
    </div>
  );
}
