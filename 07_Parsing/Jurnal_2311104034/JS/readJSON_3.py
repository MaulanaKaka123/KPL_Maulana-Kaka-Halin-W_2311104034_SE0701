import json

def ReadJSON():
    # Melakukan deserialisasi JSON menjadi objek Python
    data = json.loads(json_string)
    # Mendapatkan bagian "GlossEntry"
    gloss_entry = data['glossary']['GlossDiv']['GlossList']['GlossEntry']
    # Mencetak hasil deserialisasi "GlossEntry"
    print("GlossEntry:")
    print(f"  ID: {gloss_entry['ID']}")
    print(f"  SortAs: {gloss_entry['SortAs']}")
    print(f"  GlossTerm: {gloss_entry['GlossTerm']}")
    print(f"  Acronym: {gloss_entry['Acronym']}")
    print(f"  Abbrev: {gloss_entry['Abbrev']}")
    print(f"  GlossDef: ")
    print(f"    para: {gloss_entry['GlossDef']['para']}")
    print(f"    GlossSeeAlso: {', '.join(gloss_entry['GlossDef']['GlossSeeAlso'])}")
    print(f"  GlossSee: {gloss_entry['GlossSee']}")
# Memanggil method
ReadJSON()