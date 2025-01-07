import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Files = () => (
  <div>
    
    {/* UserButton automatically handles user session management */}
     <UserButton afterSignOutRedirectUrl="/" /> 
    files
  </div>
);

export default Files;
