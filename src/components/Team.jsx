import React from 'react'

import Mate from './Mate'

import './Team.css'

import mates from '../data//team.json'

const Team = () => (
    <div className="Team">
        {mates.map(mate => (
            <Mate
				key={mate.linkedin}
				{...mate}
            />
        ))}
    </div>
)

export default Team