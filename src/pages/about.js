import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse magnam suscipit rem nesciunt incidunt quisquam porro a eos inventore facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et autem optio nihil perspiciatis quos quo magnam molestias odit earum nulla esse illo suscipit tempora aspernatur harum dolor, nesciunt at sunt excepturi voluptate. Aperiam sit delectus libero, vitae alias maiores fuga iure velit laboriosam eos beatae ad similique odit cumque!</p>
            <Link to='/contact'>Contact Me</Link>
        </Layout> 
    )
}

export default AboutPage;