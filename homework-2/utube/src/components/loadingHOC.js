import React from 'react';

export const LoadingHOC = (WrappedComponent) => {
	return class LoadingHOC extends React.Component {
		render(){
			return this.props.activeVideo.loaded ?
				<WrappedComponent {...this.props} />
				: <div className="loader"></div>
		}
	}
}

