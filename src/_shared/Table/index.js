import React from 'react';
import './index.scss';

export const Table = ({ tableRows, onDelete, tableHeaders}) => {
    console.log('name');
    const renderHeader = (tableHeader) => {
        const { name, label } = tableHeader;
        return (
            <th key={name}>{label}</th>
        )
    }

    const renderTableRow = (tableRow) => {
        return tableHeaders.map((column, index) => {
            const {name} = column;
            let rowValue = tableRow[name];
            if (name === 'till' && rowValue === '') {
                rowValue = 'Present'
            }
            return (
                <td key={index}>{rowValue}</td>
            );
        })
    }

    const hasTableRows = (tableRows && tableRows.length !== 0);
    if (hasTableRows) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        {tableHeaders.map(tableHeader => renderHeader(tableHeader))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((tableRow, i) => {
                        return(
                            <tr key={i}>
                                {renderTableRow(tableRow)}
                                <td><span onClick={() => onDelete(i)} />de</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    } 

    return null;
    
}