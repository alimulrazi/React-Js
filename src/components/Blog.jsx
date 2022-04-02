import React from 'react'
import Breadcrumbs from '../common/Breadcrumbs'

//import css
import '../index.css'

export default function Blog() {
    return (
        <React.Fragment>
            <section>
                <Breadcrumbs />
                <SingleBlog1 title={firstBlog._title} author={firstBlog._author} image={firstBlog._image} />
                <SingleBlog1 title={secondBlog._title} author={secondBlog._author} image={secondBlog._image} />

                <SingleBlog2 title={firstBlog._title} author={firstBlog._author} image={firstBlog._image} />
                <SingleBlog2 title={secondBlog._title} author={secondBlog._author} image={secondBlog._image} />

                <SingleBlog3 title={firstBlog._title} author={firstBlog._author} image={firstBlog._image} />
                <SingleBlog3 title={secondBlog._title} author={secondBlog._author} image={secondBlog._image} />

                <SingleBlog4 title={secondBlog._title} author={secondBlog._author} image={secondBlog._image}>
                    <p>This is single blog 4 description</p>
                </SingleBlog4>
            </section>

        </React.Fragment>
    )
}

const firstBlog = {
    _title: 'Blog Title 1',
    _author: 'Alimul Razi',
    _image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
}

const secondBlog = {
    _title: 'Blog Title 2',
    _author: 'Alimul Razi',
    _image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
}
/* Option 1 to pass prop*/
const SingleBlog1 = (props) => {
    return <article className="blog-list">
        <h1>{props.title}</h1>
        <img src={props.image} width="200" />
        <p>{props.author}</p>
    </article>;
};
/* Option 2 to pass prop */
const SingleBlog2 = (props) => {
    const {title, author, image} = props;
    return <article className="blog-list">
        <h1>{title}</h1>
        <img src={image} width="200" />
        <p>{author}</p>
    </article>;
};

/* Option 3 to pass prop */
const SingleBlog3 = ({title, author, image}) => {
    //const {title, author, image} = props;
    return <article className="blog-list">
        <h1>{title}</h1>
        <img src={image} width="200" />
        <p>{author}</p>
    </article>;
};

/* Option 4 to pass prop with children*/
const SingleBlog4 = ({title, author, image, children}) => {
    //const {title, author, image} = props;
    return <article className="blog-list">
        <h1>{title}</h1>
        <img src={image} width="200" />
        <p>{author}</p>
        <p>{children}</p>
    </article>;
};

//const _title = 'Blog Title';
//const _author = 'Alimul Razi';
//const _image= 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png';

//const Person = ()=> <h1>Hello Person</h1>;
/* const Message = () => {
    return <h1>Hello Message</h1>;
}; */

/*  const SingleBlog = (props)=> {
    console.log(props)
    return <article className="blog-list">
        <Image />
        <Title />
        <Author />
        {props.title}
        {props.author}
        {props.price}
        </article>;
};*/

//const Title = () => <h2 style={{color:'green', fontSize:'14px'}}>{_title}</h2>;
//const Author = () => <p>{_author}</p>
//const Image = () => <img src ={_image} alt="default image" width="200" />
