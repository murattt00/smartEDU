

exports.getHomePage = (req, res) => {
    res.render('index', {
        page_name: "index",
    });
};

exports.getAboutPage = (req, res) => {
    res.render('about', {
        page_name: "about",
    });
};

exports.getContactPage = (req, res) => {
    res.render('contact', {
        page_name: "contact",
    });
};