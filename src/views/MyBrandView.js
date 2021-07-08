import { Select } from "../components/common/select"
import { TextField } from "../components/common/textfield"

export const MyBrandView = ({
  formState,
  setFormState,
  catOptions,
}) => {

  const handleFieldChange = (field, index) => (event) => setFormState((prev) => {
    const newState = [...prev];
    const regex = /[ ,.;:!?]+/;
    if (newState[index]) {
      let wordCount = newState.reduce((wordCount, curr) => {
        return wordCount += Object.values(curr).join(' ').split(regex).length;
      }, 0);
      wordCount += event.target.value.split(regex).length
      console.log(wordCount);
      if (wordCount <  1500) {
        newState[index][field] = event.target.value;
      }
      else {
        newState[index][field] = undefined;
      }
    }
    return newState;
  });

  return <div>
    <h1 className="text-3xl font-extrabold">
      My brand
    </h1>
    <div className="mt-4">
      <p className="text-literalGrey">Provide example of publication you have done in the past or would have written yourself</p>
    </div>
    <div className="flex flex-row flex-wrap mt-11">
      <div className="w-full md:w-1/4 md:mr-5">
        <h2 className="text-xl font-bold">Category</h2>
      </div>
      <div className="w-full md:w-1/3 md:mr-5">
        <h2 className="text-xl font-bold">Post Concept</h2>
      </div>
      <div className="w-full md:w-1/3">
        <h2 className="text-xl font-bold">Caption</h2>
      </div>
    </div>
    {Object.entries(catOptions).map(([key], index) => {
      return <div key={index} className="flex flex-row flex-wrap mt-5">
      <div className="w-full md:w-1/4 md:mr-5">
        <Select 
          className="mt-4 w-full"
          value={formState[index] ? formState[index].Category : key} 
          onChange={handleFieldChange('Category', index)}
        >
          {Object.entries(catOptions).map(([optionKey], index) => {
            return <option  
                      key={`catOption${index}`}
                      value={optionKey}
                    >
                      {optionKey}
                    </option>
          })}
        </Select>
      </div>
      <div className="w-full md:w-1/3 md:mr-5">
        <TextField 
          className="mt-4 w-full"
          placeholder="Concept"
          value={formState[index] ? formState[index].Concept : undefined}
          onChange={handleFieldChange('Concept', index)}
          onPaste={handleFieldChange('Concept', index)}
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col">
        <TextField 
          className="mt-4 w-full" 
          placeholder="Caption"
          value={formState[index] ? formState[index].Caption : undefined}
          onChange={handleFieldChange('Caption', index)}
          onPaste={handleFieldChange('Caption', index)}
        />
      </div>
    </div>
    })}

  </div>
}