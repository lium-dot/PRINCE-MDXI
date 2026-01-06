const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGkEF1KquWsBvWvALRbbmIUKAKCSYBBGm+r9vYU/P9MPuVC9PIbl1cu655+QHIBRzZKEKjH6AnOE7FKhZiipHYASMIooQA20QQgHBCEirzq5nF74s/IEiwyV7zbaP1wxKtbVUe4upsg7n2ibm0UF6AW9tkBfnFAd/AJyx4z6/pWI7xa2BIVvlzEh7LXZddua3YjGFhqYXw5MeW9cGsEGEmGEST/IEZYjB1ELVGmL2NfqBbtAq0xwiLvjuuNyub761me/GvjqoJ7Zk0k2RhOeh4W6+Rj+6HZzWq3Pmp1ZyGZpTvnU3+axrFYezUvnFNl3wqJuJjnOJ3+lzHBMULkJEBBbVl3U3HSfo9R7XKD/rvnbdR6zjHdVQKs/V+LL2L0HnPOEXPk49/WvEXUX3B/NKSlASXSUFL/el4mbb01rudtiwMnQ9rh419JR485n4mn145fp/dC+Xi05n4BGUEd511Eev5cml4U/YZK+Tslj0JcVN+GukHenX6DsuaUG6X667B3ExJOqp067rhCdZV6ySlqeABGzv9G5890l3KAr2J5bjWr7Tc2zNN9nluHQKpXXMLsZi7+XVgkq2EKttrW2GD+NwOyu5BIl16aS9cKufi5u/cCxt6Sb1TD1uZ95aM09Cr1uvsf7y7OiKqkUIRvJbGzAUYy4YFJiSZq+ntgEM7zsUMCSe6gLDwzadrmcrFbMVyW4LgmfDum9M/GjYIetod5Fc15S0VnZ9AW2QMxogzlE4x1xQVq0Q5zBGHIz+/t4GBD3E+9yet8ltEGHGhUuKPKUw/BjqxyEMAloQsatIYDYLxMBI+r2NhMAk5o2MBYEsSPAdmQkUHIwimHL0q0HEUAhGghXoV2hNGja6K2vftszhDrRB9pwHDsEIdJW+pgz6/Z4sy6Oe+hf/VjawMM+/ESRAG6TPMlnW+gNp0NVUZdBVpKayOXj7xbABDJGAOOXP4KxlSvRN6XtyFZ9O5k7XLV1vVPvo6MMZ79LPZ7dw1x9U45uV7flGpmO4RMPV7JjNWTBbpb2rbS6U0ovmk38DaRpZjk9d867Z9p7aZnQ/7igbrlqMXv1tbfdRfSofpe2lhjq1TlSbzk3VVh1R7cxJ4oUzck9QdmilhXBldRLKK7ErPaOxURuE6I4D9PmyqCiq+qRdplKo1MY96a/wqTqVe9PbTPaWeQitc1CGsdgOpMi1OiFdzuribsdL9VUj9bAsNtutMrxd+SGXaeJYxOnMk/Lds8/MpD/fKvy0UzOr5jfC6Bl9AjP0ldm9E28sJr21P2H8fEz+I5DG9nEjbrFexSrOr9rEhnoXe/e9keaJ2jMuy1AZb7ATTHuPB3h7+94GeQpFRFkGRgCSkFEcgjZgtGg8uyAR/dMTq7uL8SY2m85TyIX+Owd7nCEuYJaDkaypmtaVVa3/XrVmNJ9DnjQiHDTt5jamrvQ83wkoPmIF9OZbzX3w9g8LcWWpcQcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
