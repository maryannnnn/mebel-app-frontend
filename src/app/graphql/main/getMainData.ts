import { gql } from '@apollo/client';

export const GET_MAIN_DATA = gql`
query GetMainData($locale: I18NLocaleCode) {
  companies(locale: $locale) {
    data {
      id
    }
  }
  services(locale: $locale) {
    data {
      id
    }
  }
}
`;




//
// query GetMainData ($locale: I18NLocaleCode) {
//   companies(locale: $locale) {
//     data {
//       id
//       attributes {
//         titleCompany
//
//         titleLongMetaCompany {
//           title
//           description
//         }
//
//         announceCompany {
//           title
//           description
//           image {
//             data {
//               attributes {
//                 url
//                 alternativeText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//
//   services(locale: $locale) {
//     data {
//       id
//       attributes {
//         titleService
//
//         titleLongMetaService {
//           title
//           description
//         }
//
//         announceService {
//           title
//           description
//           image {
//             data {
//               attributes {
//                 url
//                 alternativeText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;