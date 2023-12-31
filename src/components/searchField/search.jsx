
import React from "react";
import Link from "next/link";
import { useNavigation } from '@/hooks/useRouter';


function SearchBar({ }) {
  
  const { router } = useNavigation();


  return (
    <div className="search-bar">
      <div className="input_group position_relative">
        <Link     href="/explore/[[...slug]]"
        as={`${router.locale}/explore/all`}
                                   >
     
        <div className="form_control">
          <p style={{ margin: "0" }}>Search</p>
          <button
            type="submit"
            tabindex="-1"
            className="btn btn_rounded btn_lg btn_icon btn_search"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ui-svg-inline"
            >
              <g
                id="Outline / Search / Magnifer"
                clip-path="url(#clip0_8807_21230)"
              >
                <path
                  id="Vector"
                  fillrule="evenodd"
                  clip-rule="evenodd"
                  d="M8.63509 1.89648C5.41343 1.89648 2.80176 4.50816 2.80176 7.72982C2.80176 10.9515 5.41343 13.5632 8.63509 13.5632C11.8568 13.5632 14.4684 10.9515 14.4684 7.72982C14.4684 4.50816 11.8568 1.89648 8.63509 1.89648ZM1.80176 7.72982C1.80176 3.95587 4.86115 0.896484 8.63509 0.896484C12.409 0.896484 15.4684 3.95587 15.4684 7.72982C15.4684 9.43683 14.8425 10.9976 13.8077 12.1953L15.9886 14.3763C16.1839 14.5715 16.1839 14.8881 15.9886 15.0834C15.7934 15.2786 15.4768 15.2786 15.2815 15.0834L13.1006 12.9024C11.9029 13.9372 10.3421 14.5632 8.63509 14.5632C4.86115 14.5632 1.80176 11.5038 1.80176 7.72982Z"
                  fill="#B9B9B9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8807_21230">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.968262 0.0625)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
