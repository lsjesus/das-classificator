import * as React from 'react';
import { LoadingDiv } from './styles';
export function Loading() {
    return (
        <LoadingDiv>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoadingDiv>
    )
}