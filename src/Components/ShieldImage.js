import React from 'react'
import useColors from './customHooks/useColors'

const ShieldImage = ({ endpoint, label, path, height, radius, style, url, username, repository }) => {
	const colors = useColors()

	const getLink = () => {

		let link = "https://img.shields.io/"
		const useCustomColor = true

		switch(endpoint) {
			case "npm/dt":
			case "npm/l":
				link += `${endpoint}/${path}`;
				break;
			case "website":
				link += `${endpoint}?url=${url}`
				break;
			case "github/v/release":
				link += `${endpoint}/${username}/${repository}`
				break;
			case "github/package-json/v":
				link += `${endpoint}/${username}/${repository}`
				break;
			default:
				return ""
		}

		link += `?label=${label}`
		link += `&style=${style}`

		if(useCustomColor) {
			link += `&color=%23${(colors.palette.secondary.main.substring(1))}`
			link += `&labelColor=${colors.activeMode === 'light' ? "white" : "%23363c45"}`
		}
		return link
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