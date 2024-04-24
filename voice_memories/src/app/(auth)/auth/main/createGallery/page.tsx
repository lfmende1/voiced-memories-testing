import Link from 'next/link'

import { AuthLayout } from '@/components/pages/AuthLayout'
import { Button } from '@/components/pages/Button'
import { TextField } from '@/components/pages/Fields'
import { type Metadata } from 'next'
import { Account } from '@/components/utils/Account'
import CreateGallery from "@/components/pages/auth/main/createGallery/CreateGallery";
import Head from 'next/head';
export const metadata: Metadata = {
    title: 'Create Gallery',
    icons: '/microphone-icon.svg',
}

export default function createGallery_Page() {
    return (
        <>
              <Head>
      <link rel="icon" href="/microphone-icon.svg" type="image/svg+xml" />
        <meta name="p:domain_verify" content="88bc86a6d63c58e88c487a8f85bb88d9"/>
      </Head>
            <Account>
                <CreateGallery />
            </Account>
        </>
    )
}