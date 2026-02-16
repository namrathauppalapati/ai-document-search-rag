from langchain_community.document_loaders import TextLoader

loader = TextLoader("data/notes.txt")
docs = loader.load()

print(len(docs))
print(docs[0].page_content)
