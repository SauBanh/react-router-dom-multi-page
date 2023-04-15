import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'GAMING VIETNAM 2023 - Triển lãm quốc tế về game và trò chơi điện tử',
    },
    {
        id: 'e2',
        title: 'ICTCOMM 2023 – Triển lãm Quốc tế ngành CNTT – Điện tử viễn thông – Gaming',
    },
    {
        id: 'e3',
        title: 'LEDTEC ASIA 2023 – Triển lãm LED/OLED, thiết bị chiếu sáng, bảng quảng cáo KTS',
    },
    {
        id: 'e4',
        title: 'EMA VIETNAM 2023 – Triển lãm quốc tế ngành Điện – Máy Móc Thiết Bị Công Nghiệp – Tự Động Hóa',
    },
    {
        id: 'e5',
        title: 'VIETNAM TELEFILM 2023 – Triển lãm Phim & Truyền Hình Việt Nam',
    },
    {
        id: 'e6',
        title: 'VIMF 2023 – Triển Lãm Công Nghiệp Và Sản Xuất Việt Nam',
    },
    {
        id: 'e7',
        title: 'AV SHOW HCM 2023 – Triển Lãm Thiết Bị Nghe Nhìn tại TP. HCM',
    },
];

function Events() {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Events;
