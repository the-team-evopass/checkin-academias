import '../../assets/styles/components/checkInHistoryCard/styleCheckInHistoryCard.css';

const CheckInHistoryCard = () => {
    return (
        <div className='checkInHistoryCard'>
            <div>
                <h1 className='title'>Histórico de Check-in's</h1>
                <table>
                    <thead>
                        <tr className='table-header'>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>João</td>
                            <td>2024-02-12</td>
                            <td>10:00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria</td>
                            <td>2024-02-13</td>
                            <td>15:30</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Carlos</td>
                            <td>2024-02-14</td>
                            <td>09:45</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>João</td>
                            <td>2024-02-12</td>
                            <td>10:00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria</td>
                            <td>2024-02-13</td>
                            <td>15:30</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CheckInHistoryCard;