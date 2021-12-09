import React from 'react'
import Resume from '../components/Resume'
import Skills from '../components/Skills'
import {  MainLayout } from '../Styles/Layout'

const ResumePage = () => {
    return (
        <MainLayout>
            <Skills />
            <Resume/>
        </MainLayout>
    )
}

export default ResumePage
