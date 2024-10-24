import React, { useState } from 'react';

const Livres = () => {
  const [livres, setLivres] = useState([
    {
      isbn: "42368756",
      titre: "Le Seigneur des Anneaux",
      auteur: "J. R. R. Tolkien",
      annedition: 1954,
      prix: 33,
      couverture: "5.jpg",
    },
    {
      isbn: "123698745",
      titre: "Gone Girl ",
      auteur: "Gillian Flynn",
      annedition: 2012,
      prix: 55,
      couverture: "4.jpg",
    },
    {
      isbn: "54894",
      titre: "Dune",
      auteur: "Frank Herbert",
      annedition: 2000,
      prix: 55,
      couverture: "3.jpg",
    },
    {
      isbn: "5464sf",
      titre: "Les Misérables",
      auteur: "Victor Hugo",
      annedition: 1862,
      prix: 20,
      couverture: "1.jpg",
    },
    {
      isbn: "65465445",
      titre: "orgueil et préjugés ",
      auteur: "Jane Austen",
      annedition: 1813,
      prix: 50,
      couverture: "2.jpg",
    },
  ]);
  const addlivre=()=>{
    setLivres([livre,...livres])
    }
    
    const handleDelete=(isbn)=>{
    setLivres(livres.filter((liv) => liv.isbn !== isbn))}
    
      return (
    <div>
      <button className='btn btn-success'onClick={()=>addlivre()}>Ajouter</button>
      
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
            <th>Couverture</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((l, index) => (
            <tr key={index}>
              <td>{l.isbn}</td>
              <td>{l.titre}</td>
              <td>{l.auteur}</td>
              <td>{l.prix}</td>
              <td>
                <img src={l.couverture} width={80} height={80} alt={l.titre} />
              </td>
              <td>
                <button className='btn btn-warning'>Update</button>
              </td>
              <td>
                <button className='btn btn-danger'>Delete</button>
              </td>
              <td><button className='btn btn-danger'onClick={()=>handleDelete(l.isbn)}>Delete</button></td>
              </tr>

          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Livres;
