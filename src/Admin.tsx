import React, {useState} from 'react';

export default function Admin() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");

    const addArticle = () => {
        const articleEntry = {
            name: name,
            description: description,
            price: price,
            message: message,
        }

        fetch("/.netlify/functions/addArticle",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(articleEntry)
            })
        .then(function(res){
            setMessage(`Söccess`);
        })
        .catch(function(res){
            setMessage(`Failöre`);
        })    
    }

    return <>
        <h2>Admin</h2>
        <h4>Add a new article to the database</h4>
        {   <>
            <div className="mb-3 score-entry">
                <label>Article name</label>
                <input type="text"
                       className="form-control"
                       aria-label="score entry"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
            </div>            
            <div className="mb-3 score-entry">
                <label>Article description</label>
                <input type="text"
                       className="form-control"
                       aria-label="score entry"
                       value={description}
                       onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="mb-3 score-entry">
                <label>Price</label>
                <input type="text"
                       className="form-control"
                       aria-label="score entry"
                       value={price}
                       onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={addArticle}>Add article</button>
            </div>
            </>
        }
        <div className="admin-message">{message}</div>
    </>
}
