import React, {useEffect, useState, Fragment} from 'react';
import {Link} from 'react-router-dom';

function AdminFunc(props) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
	if (props.jwt === "") {
	    props.history.push({
		pathname: "/login",
	    })
	    return;
	}
	
	fetch(`${process.env.REACT_APP_API_URL}/v1/movies`)
	    .then((response) => {
		if (response.status !== 200) {
		    setError("invalid response: ", response.status);
		} else {
		    setError(null);
		}
		return response.json();
	    })
	    .then((json) => {
		setMovies(json.movies);
	    })

    }, [props.jwt, props.history]);

    if (error !== null) {
	return <div>Error: {error.message}</div>
    } else {
	return (
	    <Fragment>
		<h2>Organize Catalogue</h2>
		
		<div className="list-group">
		    {movies.map((m) => (
			<Link key={m.id}
			      className="list-group-item list-group-item-action"
			      to={`/admin/movie/${m.id}`}>
			    {m.title}
			</Link>
		    ))}
		</div>
	    </Fragment>
	);
    }
}

export default AdminFunc;
