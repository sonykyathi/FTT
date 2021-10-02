import axios from 'axios';


export const downloadWhitePaper = async () => {

    let res = await axios({
        method: 'get',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: `${process.env.REACT_APP_API}/api/v1/whitepaper`,
    }).then(res => res.data);

    window.open(res.data, "_blank")
}
