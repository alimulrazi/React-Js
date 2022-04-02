import React from 'react'
import Breadcrumbs from '../common/Breadcrumbs'

//import css
import '../index.css'

export default function Blog() {
    return (
        <React.Fragment>
            <section>
                <Breadcrumbs />
                <Blogs />
            </section>
        </React.Fragment>
    )
}

const books = [
    {
        title: 'Blog Title 1',
        author: 'Alimul Razi',
        image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
    },
    {
        title: 'Blog Title 2',
        author: 'Alimul Razi',
        image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
    }
];

const Blogs = (props) => {
    return <article className="blog-list">
        {
        books.map((book)=>{
            const {title, author, image} = book;
            return <Book book={book} ></Book>;
        })}
    </article>;
};

const Book = (props)=>{
    const {title, author, image} = props.book;
    return(
        <div>
            <img src={image} width="200" />
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    ) 
}

/*
const names = ['david','alex','john','doe'];

const newName = names.map((name)=>{
    return <h1>{name}</h1>;
});

console.log(newName);

const Blogs = (props) => {
    return <article className="blog-list">
        {newName}
    </article>;
};
*/