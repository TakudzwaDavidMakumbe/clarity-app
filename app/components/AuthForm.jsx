'use client';

import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa,} from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthForm(){
    const supabase = createClientComponentClient();
    return (
        <header className=" p-10 flex justify-center items-center">
        <Auth
          supabaseClient={supabase}
          appearance={{theme: ThemeSupa,}}
          theme='dark'
          providers={['google', 'github', 'facebook',  'twitter']}
        />
      </header>
    )
}