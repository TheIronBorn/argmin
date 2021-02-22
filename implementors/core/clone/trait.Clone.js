(function() {var implementors = {};
implementors["argmin"] = [{"text":"impl&lt;O:&nbsp;Clone + ArgminOp, S:&nbsp;Clone&gt; Clone for Executor&lt;O, S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Clone + ArgminOp&gt; Clone for IterState&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Hessian: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Hessian: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Jacobian: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Jacobian: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for ArgminKV","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone, H:&nbsp;Clone, J:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for NoOperator&lt;T, U, H, J, F&gt;","synthetic":false,"types":[]},{"text":"impl Clone for MinimalNoOperator","synthetic":false,"types":[]},{"text":"impl Clone for WriteToFileSerializer","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Clone&gt; Clone for WriteToFile&lt;O&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ArgminSlogLogger","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Clone&gt; Clone for Observer&lt;O&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ObserverMode","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Clone + ArgminOp&gt; Clone for OpWrapper&lt;O&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Clone + ArgminOp&gt; Clone for ArgminResult&lt;O&gt;","synthetic":false,"types":[]},{"text":"impl Clone for CheckpointMode","synthetic":false,"types":[]},{"text":"impl Clone for ArgminCheckpoint","synthetic":false,"types":[]},{"text":"impl Clone for TerminationReason","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Clone + ArgminOp&gt; Clone for ArgminIterData&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Hessian: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Jacobian: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Param: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::Float: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for Brent&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, S:&nbsp;Clone&gt; Clone for ConjugateGradient&lt;P, S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, L:&nbsp;Clone, B:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for NonlinearConjugateGradient&lt;P, L, B, F&gt;","synthetic":false,"types":[]},{"text":"impl Clone for FletcherReeves","synthetic":false,"types":[]},{"text":"impl Clone for PolakRibiere","synthetic":false,"types":[]},{"text":"impl Clone for PolakRibierePlus","synthetic":false,"types":[]},{"text":"impl Clone for HestenesStiefel","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for GaussNewtonLS&lt;L, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for GaussNewton&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for GoldenSectionSearch&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone&gt; Clone for SteepestDescent&lt;L&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for Landweber&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, L:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for BacktrackingLineSearch&lt;P, L, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for ArmijoCondition&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for WolfeCondition&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for StrongWolfeCondition&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for GoldsteinCondition&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for HagerZhangLineSearch&lt;P, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for MoreThuenteLineSearch&lt;P, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for NelderMead&lt;P, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for NewtonCG&lt;L, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for Newton&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for Particle&lt;T, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone, H:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for BFGS&lt;L, H, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone, H:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for DFP&lt;L, H, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone, P:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for LBFGS&lt;L, P, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone, H:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for SR1&lt;L, H, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;B:&nbsp;Clone, R:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for SR1TrustRegion&lt;B, R, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for SATempFunc&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for SimulatedAnnealing&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for CauchyPoint&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for Dogleg&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for Steihaug&lt;P, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for TrustRegion&lt;R, F&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()