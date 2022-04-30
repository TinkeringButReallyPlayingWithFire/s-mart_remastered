import { Link } from "gatsby";
import { default as React } from "react";
import slugify from "react-slugify";

import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";

function Ratings() {
  return (
    <div>
      <li>
        <ol>
          <i class="material-icons ">star</i>
        </ol>
      </li>
    </div>
  );
}

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});
const PageHit = ({ hit }) => (
  <div>
    <Link to={`${slugify(hit.title)}`}>
      <div>
        <img src={hit.image} attribute="image" hit={hit} tagName="mark" />
        <Highlight attribute="title" hit={hit} tagName="mark" />
        <li attribute="image" hit={hit}>
          <p className="ratingText">({hit.rating.rate} Rating)</p>
        </li>
      </div>
    </Link>
  </div>
);

const HitsInIndex = ({ index }) => (
  <Index indexName="new-index-1650382375">
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
