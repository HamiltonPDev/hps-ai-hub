---
name: hps-ml-python
domain: ml
description: "Python ML conventions, pandas dataframe patterns for rental data, scikit-learn pipeline structure, vector embedding patterns (text-embedding-3-small), Jupyter notebook layout."
installed: false
isHpsDomain: true
priority: nice-to-have
---

ML workloads use Python with a standardized stack. This skill enforces pandas dataframe conventions — column naming matches Supabase schema snake_case, no implicit index columns. scikit-learn pipelines follow the `Pipeline([('preprocessor', ...), ('model', ...)])` pattern with joblib serialization. Vector embeddings use OpenAI's text-embedding-3-small model with 1536 dimensions, stored in Supabase pgvector columns. Jupyter notebooks follow a four-section layout: imports, data loading, analysis, and results with markdown headers between each section.
