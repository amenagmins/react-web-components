import React, { useEffect, useState } from "react";
import "./podcastList.css";

export const PodcastsList = () => {
  const [filterList, setFilterList] = useState([]);
  const [list, setList] = useState([]);

  const getPodcastsListCall = async () => {
    try {
      const list = await fetch(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      const json = await list.json();
      setList(json.feed.entry);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  useEffect(() => {
    getPodcastsListCall();
  }, []);

  const getFilteredPodcasts = (filter) => {
    const filteredPodcasts = list.filter(
      (podcast) =>
        podcast["im:name"].label.toLowerCase().includes(filter.toLowerCase()) ||
        podcast["im:artist"].label.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredPodcasts;
  };

  const handleFilter = (e) => {
    if (e.target.value) {
      const filteredPodcasts = getFilteredPodcasts(e.target.value);
      setFilterList(filteredPodcasts);
    } else setFilterList(list);
  };

  useEffect(() => {
    setFilterList(list);
  }, [list]);

  return (
    <article className="podcasts">
      {list.length > 0 ? (
        <>
          <section className="podcasts__filter-section">
            <span className="podcasts__top-number">{filterList.length}</span>
            <input
              tabIndex={1}
              onChange={handleFilter}
              className="podcasts__filter"
              type="text"
              name="filter"
              placeholder="Filter podcasts..."
            />
          </section>
          <section className="podcasts__section">
            {filterList.length > 0 ? (
              filterList.map((podcast, index) => (
                <div
                  className="podcasts__container"
                  key={index}
                  role="button"
                  tabIndex={index + 2}
                >
                  <img
                    className="podcasts__img"
                    alt="podcast-img"
                    src={podcast["im:image"][2].label}
                  />
                  <div className="podcasts__body">
                    <span className="podcasts__title">
                      {podcast["im:name"].label}
                    </span>
                    <span className="podcasts__author">
                      Author: {podcast["im:artist"].label}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="podcasts__no-results">
                No se han encontrado podcasts.
              </div>
            )}
          </section>
        </>
      ) : null}
    </article>
  );
};
