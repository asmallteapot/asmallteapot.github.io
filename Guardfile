ignore(%r{(_site\/|node_modules)})

guard :bundler, run_on_start: true do
  require 'guard/bundler'
  require 'guard/bundler/verify'
  helper = Guard::Bundler::Verify.new

  files = ['Gemfile']
  files += Dir['*.gemspec'] if files.any? { |f| helper.uses_gemspec?(f) }

  # Assume files are symlinked from somewhere
  files.each { |file| watch(helper.real_path(file)) }
end

guard :bundler_audit, run_on_start: true do
  watch('Gemfile.lock')
end

guard :rubocop, run_on_start: true do
  watch(/.+\.rb$/)
  watch(%r{(?:.+/)?\.rubocop(?:_todo)?\.yml$}) { |m| File.dirname(m[0]) }
end

guard :webpack

guard 'jekyll-plus', run_on_start: true, serve: true do
  watch(/.*/)
end
