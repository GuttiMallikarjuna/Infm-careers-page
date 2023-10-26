import gql from "graphql-tag";

const DATA_QUERY=gql`
query Assets {
  assets {
    createdAt
    id
    intro
    careers
    publishedAt
    fileName
    url
    updatedAt
    circledescription
    current
    openings
    ds1
    ds2
    ds3
    ds4
    ds5
    ds6
    dshead
    dsdescription
    dsbutton
    ui1
    ui2
    ui3
    ui4
    ui5
    ui6
    ui7
    uihead
    uidescription
    md1
    md2
    md3
    md4
    md5
    mdhead
    mddescription
    aws1
    aws2
    aws3
    aws4
    aws5
    aws6
    aws7
    awshead
    awsdescription
    aa1
    aa2
    aa3
    aa4
    aa5
    aa6
    aahead
    aadescription
    dga1
    dga2
    dga3
    dga4
    dgahead
    dgadescription
    hydopenings
    bangopenings
    nasscomimg {
      url
    }
    nasscomdesc
    keylinks
    aboutus
    services
    solutions
    csr
    careersss
    contactus
    getintouch
    location
    email
    followus
    facebookimg {
      url
    }
    youtubeimg {
      url
    }
    linkedinimg {
      url
    }
    antina {
      url
    }
    antinadescription
    computer {
      url
    }
    computerdescription
    wifi {
      url
    }
    wifidescription
    circle {
      url
    }
  }
}
`;


export default DATA_QUERY;