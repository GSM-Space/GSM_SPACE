import React from 'react';
import { Link } from 'react-router-dom';


const OngoingPetition = () => {
    return (
        <>
            <div className="kind-of-petition--selected">
                <div style={{ marginBottom: 17 }}>진행중인 청원</div>
            </div>
            <Link to="/petition/expired" className="kind-of-petition"><div style={{ marginBottom: 17 }}>만료된 청원</div></Link>
            <Link to="/petition/pending" className="kind-of-petition"><div style={{ marginBottom: 17 }}>답변 대기중인 청원</div></Link>
            <Link to="/petition/answered" className="kind-of-petition"><div style={{ marginBottom: 17 }}>답변된 청원</div></Link>
        </>
    );
}

export default OngoingPetition;