import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import heart from "./imgs/heart.png";
import nytBranding from "./imgs/nytBranding.png";

export default function News({ category, theme, textTheme }) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const pageUpdate = async () => {
        setLoading(true);
        const url = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=
    ${process.env.REACT_APP_API_KEY}&offset=${page * 100}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.results);
        setLoading(false);
    };

    useEffect(() => {
        document.title = `NewsX - ${category[0].toUpperCase() + category.slice(1)} News`;
        pageUpdate();
    }, []); // eslint-disable-next-line

    const fetchMoreData = async () => {
        const url = `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?api-key=
    ${process.env.REACT_APP_API_KEY}&offset=${(page + 1) * 100}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.results));
    };

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className={`container ${theme} ${textTheme}`} style={{ margin: "auto" }}>
            <h2 className="text-center" style={{ marginTop: "150px" }}>
                {category.split("/").pop()[0].toUpperCase() + category.split("/").pop().slice(1)}{" "}
                Top Headlines
            </h2>
            <InfiniteScroll
                dataLength={articles.length}
                // next={fetchMoreData}
                // hasMore={page !== 5}
                loader={<Spinner />}
                endMessage={
                    <div className={`mt-5`}>
                        <p style={{ textAlign: "center" }}>
                            Made with <img src={heart} height="17px" alt="Love" /> by
                            <a
                                className={`text-decoration-none ${textTheme}`}
                                href="https://github.com/Avadhkumar-geek/NewsX"
                            >
                                {" "}
                                ΔVADH
                            </a>
                        </p>
                        <a
                            className="d-flex justify-content-center"
                            href="https://developer.nytimes.com/"
                        >
                            <img
                                src={nytBranding}
                                alt="Data provided by The New York Times"
                                rel="noopener noreferrer"
                            />
                        </a>
                    </div>
                }
            >
                <div className="container">
                    <div className="row">
                        {articles
                            .filter(
                                (content) =>
                                    content.title !== "" &&
                                    content.abstract !== "" &&
                                    content.multimedia !== null &&
                                    content.multimedia[2].url !== null
                            )
                            .map((content) => {
                                return (
                                    <div className="col-md-4 mt-3" key={content.url}>
                                        <NewsCard
                                            theme={theme}
                                            textTheme={textTheme}
                                            title={content.title}
                                            description={content.abstract}
                                            imgUrl={content.multimedia[2].url}
                                            newsUrl={content.url}
                                            publishDate={content.published_date}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}

News.defaultProps = {
    category: "all",
};

News.propTypes = {
    category: PropTypes.string,
};
