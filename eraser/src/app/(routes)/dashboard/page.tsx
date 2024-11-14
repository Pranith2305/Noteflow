import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <Button variant={'destructive'}>
            <LogoutLink>Logout</LogoutLink>
        </Button>
    </div>
  )
}

export default Dashboard