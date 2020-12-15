import React from 'react';
import PetitionManagement from './admin/PetitionManagement';
import MemberManagement from './admin/MemberManagement';
import Header from '../header/Header';
import './Ongoing.css';

const Ongoing = () => {
	return (
		<div className="Background">
			<Header isLogin={true} />
			<div className="Management">
				<PetitionManagement />
				<MemberManagement />
			</div>
		</div>
	);
};

export default Ongoing;
