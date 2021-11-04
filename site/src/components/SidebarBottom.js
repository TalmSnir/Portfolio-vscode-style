import React from 'react';

import { VscAccount, VscGear } from 'react-icons/vsc';
import { Button } from '.';

export default function SidebarBottom() {
  return (
    <div>
      <Button title='About me'>
        <VscAccount />
      </Button>
      <Button title='change Theme'>
        <VscGear />
      </Button>
    </div>
  );
}
