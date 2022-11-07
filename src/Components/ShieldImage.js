import React from 'react'
import useColors from './customHooks/useColors'

const ShieldImage = ({ endpoint, label, path, height, radius, style, url, username, repository }) => {
	const colors = useColors()

	const getLink = () => {
		switch(endpoint) {
			case "npm/dt":
			case "npm/l":
				return `https://img.shields.io/${endpoint}/${path}?label=${label}&style=${style}&color=%23${(colors.palette.secondary.main.substring(1))}`;
			case "website":
				return `https://img.shields.io/${endpoint}?url=${url}&label=${label}&style=${style}}`
			case "github/v/release":
				return `https://img.shields.io/${endpoint}/${username}/${repository}?label=${label}&style=${style}&color=%23${(colors.palette.secondary.main.substring(1))}`
			case "github/package-json/v":
				return `https://img.shields.io/${endpoint}/${username}/${repository}?label=${label}&style=${style}&color=%23${(colors.palette.secondary.main.substring(1))}`
				default:
				return ""
		}
	}

	return (
		<img 
			src={getLink()} 
			alt={`Shield badge: ${label}`} 
			style={{borderRadius: radius, height: height}} 
		/>
	)
}

ShieldImage.defaultProps = {
	radius: '9px',
	height: '25px',
	style: 'flat-square'
}

export default ShieldImage