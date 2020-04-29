const initState = {
    posts: [
        {
            id: '1', 
            title: 'my first blog post', 
            date: '21/01/2019',
            body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae'
        },
        {
            id: '2',
            title: 'starting a new job',
            date: '01/01/2010',
            body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas'
        },
        {
            id: '3', 
            title: 'Picking up Laravel',
            date: '13/02/2019',
            body: 'From September 2018 - February 2019 I worked with the MVC framework Laravel to create both UX/UI oriented front-end applications, and fully functioning back-end only systems to connect e-commerce APIs. Having never worked with Laravel before, this was a great experience to get involved with an MVC framework outside of university. Thanks to Laracasts I was able to pick up the framework easily, big up Jeffrey Way!'
        },
        {
            id: '4', 
            title: 'Using Sentry',
            date: '13/12/2019',
            body: 'Sentry is a really useful tool for developers to track bugs before they get reported - why wait for a customer to report an issue when you can be notified as soon as an exception is thrown? This has been really great for helping with customer support as well as tracking any issues on a staging site before it goes live on production.'
        },
        {
            id: '5', 
            title: 'University Final Year Project',
            date: '13/02/2019',
            body: '"How can we vote electronically in a secure way?" I created a working demo of a verifiable voting system. Created using Java for Android, with a Web application built using object-oriented PHP. This project was based on the Prêt-à-Voter system.'
        },
        {
            id: '6', 
            date: '03/11/2016',
            title: 'Integrating Perl, PHP and JavaScript', 
            body: 'I created a server management interface whilst working as a Trainee Computer Scientist using JavaScript, PHP and Perl to provide information to a hospital computing department in order to notify them of any downtime.'
        }
    ]
}

const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer