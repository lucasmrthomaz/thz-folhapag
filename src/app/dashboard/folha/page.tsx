'use client'

import React from 'react';
import FolhaTable from '../ui/FolhaTable';
import { Fab } from '@mui/material';
import { ArrowBackSharp } from '@mui/icons-material';

const handleBackToHome = () => {
    window.history.back()
};

const FolhaPage = () => {
    return (
        <div className="p-5" >
            <h1 className="text-3xl mb-5 font-sans font-thin">FATURAS</h1>
            <FolhaTable />

            <Fab
                color="secondary"
                aria-label="go back"
                onClick={handleBackToHome}
                style={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <ArrowBackSharp />
            </Fab>
        </div>
    );
};

export default FolhaPage;