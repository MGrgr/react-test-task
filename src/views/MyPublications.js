import { useEffect, useState } from "react"
import { api } from "../api"
import { Button } from "../components/common/button"
import { Select } from "../components/common/select"
import { Tab } from "../components/common/tab"
import { TextArea } from "../components/common/textarea"
import { TextField } from "../components/common/textfield"

export const MyPublicationsView = ({
  langOptions,
  catOptions,
  formState
}) => {
  const [lang, setLang] = useState();
  const [category, setCategory] = useState();
  const [concept, setConcept] = useState('');
  const [design, setDesign] = useState({});
  const [caption, setCaption] = useState('');
  const [load, setLoad] = useState({
    caption: false,
    design: false,
  });

  const generatePublicationButton = () => {
    setLoad({
      caption: true,
      design: true,
    });
    api.getCaption({
      Initialisation:  formState
        .filter(value => value.Category && value.Concept && value.Caption)
        .map(value => ({
          ...value,
          Concept: `${value.Category} ${value.Concept}`,
          Category: catOptions[value.Category]
        })),
      postCategory: catOptions[category],
      postRequest: `${category} ${concept}`,
      postLanguage: lang
    }).then(res => {
      setCaption(res[`${lang} Caption`] || res['EN Caption']);
    }).finally(() => {
      setLoad((prev) => ({...prev, caption: false}));
    });
    api.getDesign({
      postCategory: catOptions[category],
      postRequest: concept,
      postLanguage: lang
    }).then(res => {
      setDesign(JSON.parse(res));
    }).finally(() => {
      setLoad((prev) => ({...prev, design: false}));
    });
  }

  useEffect(() => {
    lang || setLang(Object.values(langOptions)[0]);
    category || setCategory(Object.keys(catOptions)[0]);
  }, [langOptions, catOptions, lang, category])
  return <div>
    <h1 className="text-3xl font-extrabold">
      My publications
    </h1>
    <div className="mt-4">
      <p className="text-literalGrey">Give us a category and detail, and we will give you a caption as well as directions for the design</p>
    </div>
    <div className="flex flex-col mt-11 w-full">
      <div className="w-full flex flex-row flex-nowrap border-b">
        <Tab active className="mr-4">
          New publication
        </Tab>
        <Tab>
          Saved publications
        </Tab>
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap w-full mt-5">
        <Select 
          value={lang}
          onChange={(e) => {
            setLang(e.target.value)
          }}
          className="md:mr-4 w-full lg:w-1/3">
          {Object.entries(langOptions).map(([langName, langValue], index) => 
              <option 
              key={`langOption${index}`}
                value={langValue}
              >
                {langName}
              </option>
          )}
        </Select>
        <Select 
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          className="mt-4 md:mt-0 md:mr-4 w-full lg:w-1/3"
        >
          {Object.keys(catOptions).map((cat, index) => <option key={`catOption${index}`} value={cat}>{cat}</option>)}
        </Select>
        <TextField 
          value={concept} 
          placeholder="Concept" 
          className="mt-4 md:mt-0 md:mr-4 w-full"
          onChange={(event) => setConcept(event.target.value)}
        />
        <div className="mt-4 md:mt-0 lg:w-2/3">
          <Button className="relative" onClick={generatePublicationButton} loading={(load.caption || load.design)} disabled={(load.caption || load.design)}>
            Generate a publication
        </Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap mt-5 h-auto md:h-72">
        <div className="flex flex-col h-full w-full md:w-1/2 md:mr-4 items-stretch">
          <TextArea
            className="h-full w-full mb-4"
            header="Caption"
            placeholder="Caption"
            disabled
            value={caption}
          />
        </div>
        <div className="flex flex-col h-full w-full md:w-1/2 md:mr-4">
          <TextArea
            className="h-1/2 w-full mb-4"
            header="Image description"
            placeholder="Description"
            value={design['Image description']}
            disabled
          />
          <TextArea
            className="h-1/2 mt-4 w-full"
            header="Text to appear on image"
            value={design['Text to appear']}
            placeholder="Text"
            disabled
          />
        </div>
      </div>
      <div className="flex flex-row flex-nowrap mt-4 mb-4">
        <Button color="light">Save publication</Button>
      </div>
    </div>
  </div>
}