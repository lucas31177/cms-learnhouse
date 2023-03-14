"use client";
import React, { createContext, useState } from 'react'
import { styled } from '@stitches/react';
import Link from 'next/link';
import { AuthContext } from '@components/Security/AuthProvider';
import Avvvatars from 'avvvatars-react';




function SettingsLayout({ children, params }: { children: React.ReactNode, params: any }) {
    const auth: any = React.useContext(AuthContext);

    return (
        <>
            <Main>
                <LeftWrapper>
                    {auth.isAuthenticated && (
                        <Avvvatars value={auth.userInfo.user_object.user_id} style="shape" />
                    )}
                    <LeftMenuWrapper>
                        <MenuTitle>Account</MenuTitle>
                        <ul>
                            <li><Link href="/settings/account/profile">Profile</Link></li>
                            <li><Link href="/settings/account/passwords">Passwords</Link></li>
                        </ul>
                        <MenuTitle>Organization</MenuTitle>
                        <ul>
                            <li><Link href="/settings/organization/general">General</Link></li>
                            <li><Link href="/settings/organization/roles">Roles</Link></li>
                        </ul>
                    </LeftMenuWrapper>
                </LeftWrapper>
                <RightWrapper>
                    {children}
                </RightWrapper>
            </Main>
        </>
    )
}

export default SettingsLayout


const Main = styled('div', {
    display: 'flex',
})

const LeftWrapper = styled('div', {
    width: '250px',
    background: "linear-gradient(348.55deg, #010101 -8.61%, #343434 105.52%);",
    height: '100vh',
    padding: '20px',
})

const LeftMenuWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',

    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        li: {
            marginBottom: '10px',
            a: {
                color: '#ffffff8c',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                '&:hover': {
                    textDecoration: 'underline',
                }
            }
        }
    }

})

const MenuTitle = styled('h3', {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
})

const RightWrapper = styled('div', {
    flex: 1,
    padding: '20px',
    boxSizing: 'border-box',
    margin: '40px',
})