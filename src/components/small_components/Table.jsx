import data from '../../data/tableData.json';
import { greenArrow, redCross } from '../../data/svgs';

function Table() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Card</td>
                        <td>MacOS</td>
                        <td className='last_columns'>Windows</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td >{item.mac ? greenArrow : redCross} </td>
                                <td className='last_columns'>{ item.windows ? greenArrow : redCross}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type='button' className='btn_collapse'>Collapse table</button>
        </>
        
    )
}

export default Table;