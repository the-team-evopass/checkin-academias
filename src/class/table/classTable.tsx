import { Component } from 'react';
import '../../assets/styles/components/checkinHistoryTable/styleCheckinHistoryTable.css'

interface TableProps {
  columns: string[];
  data: string[][];
  nome: string; // Parâmetro adicionado para o nome da classe
}

export default class TableComponent extends Component<TableProps> {
    render() {
        const { columns, data, nome } = this.props;

        return (
            <table className={`${nome}-table`}>
                <thead className={`${nome}-table-head`}>
                    <tr className={`${nome}-table-row`}>
                        {columns.map((column, index) => (
                            <th key={index} className={`${nome}-table-header table-header`}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={`${nome}-table-body`}>
                    {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${nome}-table-row`}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} className={`${nome}-table-cell`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
